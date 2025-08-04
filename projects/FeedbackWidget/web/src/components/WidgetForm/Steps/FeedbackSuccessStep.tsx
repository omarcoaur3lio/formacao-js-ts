import { CloseButton } from "../../CloseButton";
import imgSuccess from "../../../assets/success.svg";

interface feedbackSuccessProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: feedbackSuccessProps) {
    return (
        <>
        <header>
            <CloseButton />
        </header>
        
        <div className="flex flex-col items-center py-10 w-[384px]">
            <img src={imgSuccess} alt="Sucesso" className="w-10 h-10" />
            <span className="text-xl mt-2">Agradecemos o feedback!</span>
            <button
            onClick={onFeedbackRestartRequested}
                className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900  focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            >
                Quero enviar outro
            </button>
        </div>
        </>
    )
}
