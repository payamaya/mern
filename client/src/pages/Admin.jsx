const Admin = () => {
  return <div>Admin user</div>;
};
export default Admin;

// when dealing with list detail pattern or if the route parameter can vary(change) in value make use of dynamic routes
// Specify the URL param denoted by a colon prefix in the path :userId
// React router will always match the route that is more specific before trying to match a dynamic route users/admin will render  beforer userId
// It is possible to have nested route


  // <div className=''>
  //   <h1>Reusable Buttons</h1>

  //   <div
  //     className=''
  //     style={{
  //       display: 'flex',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       flexWrap: 'wrap',
  //       gap: '10px',
  //     }}
  //   >
  //     {/* can add ocClick and other things too */}
  //     <Buttons variant='success'>Success Button</Buttons>
  //     <Buttons variant='danger'>Danger Button</Buttons>
  //     <Buttons variant='warning'>Warning Button</Buttons>
  //     <Buttons variant='primary'>Primary Button</Buttons>
  //     <Buttons variant='secondary'>Secondary Button</Buttons>
  //     <Buttons variant='dark'>Dark Button</Buttons>
  //     <Buttons variant='light'>Light Button</Buttons>
  //     {/* <ButtonTheme></ButtonTheme> */}
  //   </div>
  // </div>