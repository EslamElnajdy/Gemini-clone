const run = async(prompt) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      message: prompt
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const response = await fetch('/api/index', options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.text;

  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default run;