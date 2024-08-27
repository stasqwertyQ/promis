//task1

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(ms), ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);


delay(2000).then(logger); 
delay(1000).then(logger); 
delay(1500).then(logger); 


// task2

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user
    );

    resolve(updatedUsers);
  });
};

const loggerr = updatedUsers => console.table(updatedUsers);


toggleUserState(users, 'Mango').then(loggerr);
toggleUserState(users, 'Lux').then(loggerr);


// task3


