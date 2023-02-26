export const UserGreeting = (props) => {
   const isLoggedIn = false
   return <div>Welcome {isLoggedIn ? 'Sina' : 'Guest' }</div>
}