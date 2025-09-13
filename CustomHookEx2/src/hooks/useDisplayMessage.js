export default function useDisplayMessage(){
    function DisplayMessage(){
        console.log('This is a custom hook 1')
        return 'This is a custom hook 1'
    }

    return [DisplayMessage]
}