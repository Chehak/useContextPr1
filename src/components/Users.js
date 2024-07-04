import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Users = () => {
    const { usersData } = useContext(UserContext);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData && usersData.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
