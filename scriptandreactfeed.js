function FeedbackForm() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    courseEnrolled: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullName: '',
      courseEnrolled: '',
      feedback: ''
    });
  };

  return (
    <div className="feedback-container">
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <select
          name="courseEnrolled"
          value={formData.courseEnrolled}
          onChange={handleChange}
          required
        >
          <option value="">Select Course Enrolled</option>
          <option value="Google Fundamentals for Beginners">Google Fundamentals for Beginners</option>
          <option value="Advanced Google Search Techniques">Advanced Google Search Techniques</option>
          <option value="Google Productivity Suite">Google Productivity Suite</option>
          <option value="Developing Apps and Extensions with Google APIs">Developing Apps and Extensions with Google APIs</option>
        </select>
        <textarea
          name="feedback"
          value={formData.feedback}
          placeholder="Enter your feedback here... (Minimum 10 characters)"
          onChange={handleChange}
          required
          minLength="10"
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

ReactDOM.render(<FeedbackForm />, document.getElementById('feedback-root'));
