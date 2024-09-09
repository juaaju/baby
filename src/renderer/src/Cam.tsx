import { useCallback, useEffect, useState } from "react";
import Webcam from "react-webcam";
import { useRef } from "react"; // import useRef
import { IoArrowBack, IoCameraOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom"
const Cam = () => {
    const navigate = useNavigate()
    const [zoomImage1, setZoomImage1] = useState(false);
    const [devices, setDevices] = useState<any>([]);
    const webcamRef1: any = useRef(null);
    const webcamRef2: any = useRef(null);
    const [imgSrc1, setImgSrc1] = useState(null);
    const url = "http://127.0.0.1:5000";
    const capture = useCallback(() => {

        const imageSrc1 = webcamRef1.current.getScreenshot();
        setImgSrc1(imageSrc1);
        axios.put(`${url}/api/items/recent`, {
            id: "recent",
            image1: imageSrc1,
            image2: ""
        }).then((res)=>{
            console.log(res)
            alert("Berhasil mengirim gambar")
            navigate("/result")
        }
        ).catch((err)=>{
            console.log(err)
            alert("Ada masalah")
        })
    }, [webcamRef1, webcamRef2]);
  
    const handleDevices = useCallback(
        (mediaDevices: any) =>
            setDevices(mediaDevices.filter(({ kind }: any) => kind === "videoinput")),

        [setDevices]
    );

    useEffect(
        () => {
            navigator.mediaDevices.enumerateDevices().then(handleDevices);

        },
        [handleDevices]
    );

    return (

        <div className="flex flex-col gap-10  justify-center p-10">
            <button onClick={() => navigate("/")}><IoArrowBack size={30}></IoArrowBack></button>
            {
                !zoomImage1 && <div className="flex flex-row gap-4 justify-center items-center">

                    <div className='justify-center items-center relative h-full'>
                        <div className="flex flex-col gap-3">
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 2, } }} className=' text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Camera 1</motion.h1>

                            <Webcam className="rounded-xl" ref={webcamRef1} audio={false} videoConstraints={{ deviceId: devices[1]?.deviceId }} />
                        


                        </div>
                        <div className="flex flex-col gap-20">
                        </div>

                    </div>
                    <div className=" justify-center items-center relative">
                       


                        <div className="flex flex-col gap-20">
                        </div>
                    </div></div>
            }
            <button className="text-purple-700  border-[1px] border-black/20 rounded-2xl p-4 h-fit text-center flex items-center justify-center" onClick={capture}><IoCameraOutline size={40}></IoCameraOutline></button>
            {/* <button onClick={() => setZoomImage1(!zoomImage1)} className="">
                <img className="w-[100px] rounded-xl" src={imgSrc1 || ''} alt="" />
            </button> */}

            {zoomImage1 &&
                <div className="absolute top-0 left-0 w-full h-fit bg-black">
                    <div className="w-full px-10 py-5 bg-dongker flex-row text-white">
                        <button onClick={() => setZoomImage1(!zoomImage1)}><IoArrowBack size={30}></IoArrowBack></button>
                    </div>
                    <img className="w-full h-screen object-contain" src={imgSrc1 || ''} alt="" />
                </div>
            }


            </div>
    );
};

export default Cam
