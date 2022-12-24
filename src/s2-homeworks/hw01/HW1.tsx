import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type UserType = {
    avatar: string,
    name: string,
}
export type UserMessageType = {
    text: string,
    time: string,
}
export type MessageType = {
    id:number,
    user: UserType,
    message: UserMessageType,
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://pm1.narvii.com/7078/a8e8bb00184ae1989c81cae60043dd79f17a0c56r1-660-440v2_128.jpg', // можно менять
        name: 'Stallone',  // можно менять
    },
    message: {
        text: 'Hello, she didn’t do anything and rested all day, how are you?!', // можно менять
        time: '22:00', // можно менять
    },
}

export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://i.mycdn.me/i?r=AzExTCcIQuhnRIX9gBwt8KAMlinGJ8FfA6hkX73Hyq-t6RuAbMauzUN6nRMsKSGM26k&fn=sqr_128', // можно менять
        name: 'Bruce', // можно менять
    },
    message: {
        text: 'Hello, she didn’t do anything and rested all day, how are you?! ', // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
