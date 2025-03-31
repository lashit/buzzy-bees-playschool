// Enrollment Form Handling
const enrollmentForm = document.getElementById('enrollmentForm');
if (enrollmentForm) {
    enrollmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const studentName = document.getElementById('studentName').value;
        const parentName = document.getElementById('parentName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;

        // Basic validation
        if (!studentName || !parentName || !phoneNumber) {
            alert('Please fill in all fields');
            return;
        }

        // Phone number validation
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!phoneRegex.test(phoneNumber)) {
            alert('Please enter a valid phone number');
            return;
        }

        // Create enrollment data object
        const enrollmentData = {
            studentName,
            parentName,
            phoneNumber,
            submissionDate: new Date().toISOString()
        };

        // Here you would typically send this data to your server
        // For now, we'll just show a success message
        alert('Thank you for your enrollment request! We will contact you shortly.');
        
        // Reset form
        enrollmentForm.reset();
    });
} 