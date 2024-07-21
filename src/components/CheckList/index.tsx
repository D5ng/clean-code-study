import { useList } from "@/context/ListContext";

const CheckList = () => {
  const { list } = useList();

  return (
    <div className="h-400 overflow-auto flex flex-col gap-20 p-50">
      {list.map((item, index) => (
       
        <label  className="flex justify-between hover:cursor-pointer hover:text-green">
        <span className="peer-checked:text-gray-50 " key={index}>{item}</span>
        <input type="checkbox" className="hidden peer" />
        <div className="w-25 h-25 border-1 border-gray-300 rounded-m peer-checked:bg-green peer-checked:bg-green"></div>
        </label>
        
        
      ))}
    </div>
  );
};

export default CheckList;