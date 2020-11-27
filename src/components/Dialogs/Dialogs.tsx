import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {
    dialogsPageType,



} from "../../Redux/Store";



type PropsType = {
    addNewMessage: (body: string) => void
    sendMessage: () => void
    dialogsPage: dialogsPageType


}


function Dialogs(props: PropsType) {


    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = state.messages.map((m) => <Message message={m.message} id={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let body = e.currentTarget.value
        props.addNewMessage(body)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder="Enter your message"></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default Dialogs;