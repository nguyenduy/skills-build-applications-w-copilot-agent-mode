import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://obscure-carnival-p7vg76qjpc7577-8000.app.github.dev/api/users/?format=api')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title text-primary mb-4">Users</h1>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              {/* ...table content... */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
