import { LiaSpinnerSolid } from "react-icons/lia";

const Loading = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <span className="text-2xl text-white animate-spin"> <LiaSpinnerSolid /> </span>
        </div>
    )
}

export default Loading;