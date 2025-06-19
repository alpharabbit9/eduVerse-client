import React, { useEffect } from 'react';

const ResultFetcher = () => {
  useEffect(() => {
    const fetchResult = async () => {
      const formData = new URLSearchParams();
      formData.append('action', 'get-result');
      formData.append('student_id', '0182310012101033'); // Add your student ID here

      try {
        const response = await fetch('https://www.lus.ac.bd/wp-admin/admin-ajax.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
          },
          body: formData.toString(),
        });

        const data = await response.json();
        console.log('Result:', data);
      } catch (error) {
        console.error('Error fetching result:', error);
      }
    };

    fetchResult();
  }, []);

  return (
    <div>
      <h1>Fetching Result Without Birthdate...</h1>
    </div>
  );
};

export default ResultFetcher;
