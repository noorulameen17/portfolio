export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Here you can handle the form submission, e.g., send an email, save to a database, etc.
    // For demonstration purposes, we'll just log the data and return a success response.

    console.log('Form data:', { name, email, message });

    // Return a success response
    res.status(200).json({ message: 'Form submitted successfully' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
