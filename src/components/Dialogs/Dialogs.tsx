import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {

    StoreType
} from "../../Redux/State";
import {addNewMessageActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";


type PropsType = {

    store: StoreType;

}


function Dialogs(props: PropsType) {


    let state= props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = state.messages.map((m) => <Message message={m.message} id={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {

        props.store.dispatch(addNewMessageActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div> <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"></textarea></div>
                    <div> <button onClick={ onSendMessageClick }>send</button></div>
                </div>


            </div>

        </div>

    )
}

export default Dialogs;