export default function useDisplay(){
    function DisplayMessage(){
        console.log("This is a custom hook1")
        return "This is a custom hook1"
    }
    return [DisplayMessage]
}