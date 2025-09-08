import React from 'react'
import toast from "react-hot-toast"; // make sure this is imported
import { FiCopy } from "react-icons/fi";




import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateTopastes } from "../redux/pasteSlice";
const Pasteview = () => {
const {id} = useParams();

const allPastes = useSelector((state) => state.paste.pastes);

const paste = allPastes.filter((p)=>p._id === id)[0];
console.log("Final Paste:",paste)


  return (
   <div>
      <div className="flex flex-row gap-7 place-content-between ">
        <input
          className="p-2  rounded-2xl mt-2 w-[60%] pl-5"
          type="text"
          placeholder="Enter Task here "
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <button onClick={createPaste} className="p-2 rounded-2xl mt-2">{pasteId ? "Update My Paste" : "Create My Paste "}</button> */}
      </div>
     <div className="relative mt-8 w-fit">
  <textarea
    className="rounded-2xl mt-4 min-w-[500px] p-4"
    value={paste.content}
    placeholder="Enter content here"
    onChange={(e) => setValue(e.target.value)}
    rows={20}
  />

  {/* Copy Button (Positioned in corner of textarea) */}
  <button
    onClick={() => {
      navigator.clipboard.writeText(paste?.content);
      toast.success("Content copied!");
    }}
    className="absolute top-3 right-3 bg-gray-200 p-2 rounded-full hover:bg-gray-300 mt-3"
    title="Copy to clipboard"
  >
 <FiCopy/>

  </button>
</div>
     
    </div>
  )
}

export default Pasteview  