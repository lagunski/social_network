import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {dialogsPageType} from "../../Redux/State";


type PropsType = {
    state: dialogsPageType

}

let newMessageElementRef = React.createRef<HTMLTextAreaElement>()


let addMessage = () => {
    let message = newMessageElementRef.current?.value
    alert(message)
}

function Dialogs(props: PropsType) {


    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map((m) => <Message message={m.message} id={m.id}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}

                <div>
                    <textarea ref={newMessageElementRef}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>send</button>
                </div>

            </div>

        </div>

    )
}

export default Dialogs;