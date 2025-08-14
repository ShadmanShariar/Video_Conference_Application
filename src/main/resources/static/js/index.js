
// Handle creating a new meeting
function handleNewMeeting() {

    window.open(`videocall.html`, "_blank");
}

// Handle joining an existing meeting
function handleJoinMeeting() {
    const roomId = document.getElementById("meetingName").value;
    if (!roomId || roomId.trim() === "") {
        alert("Please enter a valid meeting ID");
        return;
    }
    window.open(`videocall.html?roomID=${roomId}`, "_blank");
}

// Attach event listeners
const newMeetingBtn = document.getElementById("newMeetingBtn");
newMeetingBtn.addEventListener("click", handleNewMeeting);

const joinMeetingBtn = document.getElementById("joinMeetingBtn");
joinMeetingBtn.addEventListener("click", handleJoinMeeting);
