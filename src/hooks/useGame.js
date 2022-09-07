import { useContext, useRef, useState } from "react"
import GameContext from "../context/GameContext";

const getPoint = (user, house) => {
    
    let point = 0

    switch (user) {
        case "rock":
            point = house === "scissors" ? 1 : -1
            break;
        case "paper":
            point = house === "rock" ? 1 : -1
            break;
        case "scissors":
            point = house === "paper" ? 1 : -1
            break;
        }

    return user === house ? 0 : point

}

export default () => {

    const [ step, setStep ] = useState(1)

    const userRef = useRef("")
    const houseRef = useRef("")
    const pointRef = useRef(0)

    const { addPoint } = useContext(GameContext)

    const replayHandler = () => setStep(1)

    const houseChoicehandler = () => {

        const options = ["rock", "paper", "scissors"]

        houseRef.current = options[Math.floor(Math.random() * 3)]

    }

    const userChoiceHandler = choice => {
        setStep(2)
        userRef.current = choice
        
        setTimeout(() => {
            setStep(3)
            houseChoicehandler()
        }, 2000) 

        setTimeout(() => {
            setStep(4)
            pointRef.current = getPoint(userRef.current, houseRef.current)
            addPoint(pointRef.current)
        }, 4000) 

    }

    return { 
        step, 
        userChoiceHandler, 
        replayHandler, 
        userChoice: userRef.current, 
        houseChoice: houseRef.current, 
        point: pointRef.current
    }

}