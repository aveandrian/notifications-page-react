import './App.css'
import Notification from './components/Notification'
import notifications from './notifications.json'
import notifi_types from './notif_types.json'
import { useEffect, useState } from 'react'

function App() {
  const [notifs, setNotifs] = useState(notifications)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(()=>{
    setUnreadCount(notifs.filter(notif => notif.unread).length)
  }, [notifs])
  
  function readAll(){
    setNotifs(prevNotifs => prevNotifs.map(prevNotif => ({...prevNotif, unread: false})))
  }

  return (
    <>
    
    <main>
      <section className='main-header'>
        <h1>Notifications </h1> {unreadCount > 0 && <div className='unread-count'> {unreadCount}</div>}
        <button onClick={readAll} className='read-btn'>Mark all as read</button>
      </section>
      <section className='notifications-section'>
        {notifs.map(notification => {
          return <Notification key={notification.id} {...notification}/>
        })}
      </section>
    </main>
    <footer>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
    </footer>
    </>
  )
}

export default App
