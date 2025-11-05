<<<<<<< HEAD:alx-react-app-new/src/components/UserProfile.jsx
function UserProfile(props) {
=======
import react from 'react';
function UserProfile(props) {
   <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
   <h2 style={{ color: 'blue' }}>{props.name}</h2>
   <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
   <p>Bio: {props.bio}</p>
 </div>

>>>>>>> 6e2e3ad3893327d270ba3b941b54d75d9a0cb596:alx-react-app-new/alx-react-app/src/components/UserProfile.jsx
  return (
    <div className="user-profile">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
