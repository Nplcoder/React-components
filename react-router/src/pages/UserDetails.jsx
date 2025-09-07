import { useParams } from "react-router"

export default function UserDetails(){
    const paramsData = useParams()

    return(
        <div>
            <h1>User Detail Page: {paramsData.id}</h1>
            <h1>Username: {paramsData.name}</h1>
            
        </div>
    )
}