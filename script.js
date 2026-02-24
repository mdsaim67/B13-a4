const tabs = document.querySelectorAll(".tab");
const jobCards = document.querySelectorAll(".job-card");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");
const emptyState = document.getElementById("emptyState");
const appliedStatus = document.getElementById('appliedStatus')

let currentTab = "all";

const tempTotalCards = document.querySelectorAll(".job-card").length;


function updateCounts() {
  const cards = document.querySelectorAll(".job-card");

  let total = cards.length;
  let interview = 0;
  let rejected = 0;

  cards.forEach(card => {
    if (card.dataset.status === "interview") interview++;
    if (card.dataset.status === "rejected") rejected++;
  });


  totalCount.textContent = total;
  interviewCount.textContent = interview;
  rejectedCount.textContent = rejected;

  if (currentTab === "all") {
    tabCount.textContent = total + " jobs";
  } else if (currentTab === "interview") {
    tabCount.textContent = interviewCount.textContent + " of " + total + " jobs";
  } else {
    tabCount.textContent = rejectedCount.textContent + " of " + total + " jobs";
  }
}


function filterJobs() {
  const cards = document.querySelectorAll(".job-card");
  let visible = 0;

  cards.forEach(card => {
    const status = card.dataset.status;

    if (currentTab === "all") {
      card.style.display = "block";
      visible++;
    }
    else if (status === currentTab) {
      card.style.display = "block";
      visible++;
    }
    else {
      card.style.display = "none";
    }
  });


  if (visible === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  updateCounts();
}


tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("tab-active"));
    tab.classList.add("tab-active");

    currentTab = tab.dataset.tab;
    filterJobs();
  });
});

document.addEventListener("click", function (e) {

  if (e.target.classList.contains("interview-btn")) {

    const card = e.target.closest(".job-card");
    const badgeStatus = card.querySelector('.status-badge')
    if (card.dataset.status === "interview") {
      card.dataset.status = "none";
    } else {
      card.dataset.status = "interview";
      badgeStatus.textContent = 'Interview';
      badgeStatus.className = 'status-badge px-3 py-1 text-xs rounded bg-green-100 text-green-700'
    }


    filterJobs();
  }


  if (e.target.classList.contains("rejected-btn")) {
    const card = e.target.closest(".job-card");
    const badgeStatus = card.querySelector('.status-badge')
    if (card.dataset.status === "rejected") {
      card.dataset.status = "none";
    } else {
      card.dataset.status = "rejected";
      badgeStatus.textContent = 'Rejected';
      badgeStatus.className = 'status-badge px-3 py-1 text-xs rounded bg-red-100 text-red-700'

    }


    filterJobs();
  }


  if (e.target.classList.contains("delete-btn")) {
    const card = e.target.closest(".job-card");
    card.remove();
    filterJobs();
  }

});


updateCounts();