import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://obscure-carnival-p7vg76qjpc7577-8000.app.github.dev/api/teams/?format=api')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title text-primary mb-4">Teams</h1>
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

export default Teams;
