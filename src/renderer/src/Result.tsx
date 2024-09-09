import  { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import {useStopwatch} from 'react-timer-hook';
// import * as XLSX from 'xlsx';
const Result = () => {
  // const [data, setData] = useState([])
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(true)
  const { seconds, minutes} = useStopwatch({ autoStart: true});
  useEffect(() => {
      axios.get('http://127.0.0.1:5000/api/items').then((res) => {
        console.log(res.data.result)
        setResult(res.data.result)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
    }, [])
  //   const exportToExcel = () => {
    
  //   const workBook = XLSX.utils.book_new();
  //   const workSheet = XLSX.utils.json_to_sheet(result);
  //   XLSX.utils.book_append_sheet(workBook, workSheet, 'hasil');
  //   //Buffer
  //   let buf = XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' });
  //   //Binary string
  //   XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' });
  //   //Download
  //   XLSX.writeFile(workBook, 'hasil.xlsx');
  // }
  return (

    <div className='p-20'>
      {loading ?
       <div style={{textAlign: 'center'}}>
       <h1>Gambar dalam proses pengukuran</h1>
      <div style={{fontSize: '100px'}}>
      <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>

    </div> :
      result[0] != null ?
      <div className='flex flex-col items-center border-[1px] border-black/30 p-8 rounded-xl '>
      <h1 className='text-2xl font-bold mb-10'>Hasil Pengukuran Bayi</h1>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col'>
          <h1 className='text-lg'>Lingkar kepala:</h1>
          <p className='text-gray-600'>{parseFloat(result[0]).toFixed(2)} cm</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-lg'>Lingkar lengan:</h1>
          <p className='text-gray-600'>{parseFloat(result[1]).toFixed(2)} cm</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-lg'>Lingkar paha:</h1>
          <p className='text-gray-600'>{parseFloat(result[2]).toFixed(2)} cm</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-lg'>Lingkar perut:</h1>
          <p className='text-gray-600'>{parseFloat(result[4]).toFixed(2)} cm</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-lg'>Lingkar dada:</h1>
          <p className='text-gray-600'>{parseFloat(result[3]).toFixed(2)} cm</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-lg'>Total panjang bayi:</h1>
          <p className='text-gray-600'>{parseFloat(result[7]).toFixed(2)} cm</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-lg'>Panjang kaki:</h1>
          <p className='text-gray-600'>{parseFloat(result[5]).toFixed(2)} cm</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-lg'>Panjang tangan:</h1>
          <p className='text-gray-600'>{parseFloat(result[6]).toFixed(2)} cm</p>
        </div>
	<Link to="/camera" className='rounded-xl p-2 border-[1px] '>Kembali</Link>
      </div>
      {/* <button onClick={exportToExcel} className='border-[1px] text-black text-xl border-black font-semibold py-2 px-4 mt-10 rounded-xl'>Download Hasil</button> */}
    </div>
      :
	<div>
      <h1>Ada masalah dalam pengukuran</h1>
 <a href="/" className='rounded-xl p-2 border-[1px] '>Kembali</a>

	</div>
      }
      <div>
      
      </div>

    </div>
  )
}

export default Result
