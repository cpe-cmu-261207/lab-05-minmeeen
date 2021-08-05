type DoneProps = {
    id: number;
    name: string;
}

const DoneTask = ({ id, name }: DoneProps) => {
    return(
       <div
        className="flex justify-between h-8 items-center py-6 border-b"
    >
        <span className="text-2xl line-through "> {name} </span>
        <div className="flex space-x-1 items-center">
        </div>
    </div> 
    )
    
}
export default DoneTask