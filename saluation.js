document.addEventListener('DOMContentLoaded', function() {
    function getSalutation() {
        const now = new Date();
        const hours = now.getHours();
        if (hours < 12) {
            return "Good Morning";
        } else if (hours < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    }

    const salutationMessage = document.getElementById('saluationMessage');
    salutationMessage.textContent = getSalutation();
});
