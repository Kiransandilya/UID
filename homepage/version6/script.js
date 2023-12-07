document.addEventListener('DOMContentLoaded', function() {
    // user data with blog posts
    var userData = {
        name: "Abhishek Sharma",
        bio: "Traveller, TechSavvy and Fitness",
        profilePicture: "pp.jpeg",
        about:" I'm a passionate traveler, exploring new horizons and cultures, always with the latest tech in hand. Tech-savvy, I thrive on staying ahead of the curve, integrating innovative solutions in every aspect of life. Fitness enthusiast, I believe in the power of a healthy body and mind, constantly challenging myself to new heights of physical and mental well-being. ",
        posts: [
            {
                title: "The Hidden Trails of the Himalayas",
                description: "Discover the less-traveled paths through the majestic Himalayan mountains. A journey of stunning vistas and cultural encounters."
            },
            {
                title: "Culinary Adventures in Italy",
                description: "An exploration of Italy's rich culinary heritage, from traditional pasta dishes to lesser-known regional delicacies."
            },
            {
                title: "Tech Trends: The Future of AI",
                description: "Diving into the evolving world of artificial intelligence and what it means for the future of technology."
            },
            {
                title: "Sustainable Living: A Practical Guide",
                description: "Tips and strategies for adopting a more sustainable lifestyle, reducing environmental impact while living a fulfilling life."
            },
            {
                title: "Urban Photography: Capturing City Life",
                description: "A photographic journey through urban landscapes, capturing the essence of city life from bustling streets to hidden corners."
            }
        ]
    };

    document.getElementById('userName').textContent = userData.name;
    document.getElementById('userBio').textContent = userData.bio;
    document.getElementById('profilePic').src = userData.profilePicture;
    document.getElementById('userAbout').textContent=userData.about;

    var modal = document.getElementById("resetPasswordModal");
    var span = document.getElementsByClassName("close")[0];
    document.getElementById('resetPasswordDropdown').addEventListener('click', function() {
        modal.style.display = 'block';
    });


    document.body.addEventListener('click', function(event) {
        if (event.target.id === 'editProfileDropdown') {
            var editForm = document.getElementById('editProfileForm');
            var editName = document.getElementById('editName');
            var editBio = document.getElementById('editBio');
            var editAbout = document.getElementById('editAbout');

            editForm.style.display = 'block';
            editName.value = userData.name;
            editBio.value = userData.bio;
            editAbout.value = userData.about;
        } else if (event.target.id === 'resetPasswordDropdown') {
            modal.style.display = "block";
        } else if (event.target.id === 'logoutDropdown') {
            window.location.href = '../index.html';
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    var saveBtn = document.getElementById('saveProfileBtn');
    saveBtn.addEventListener('click', function() {
        var editName = document.getElementById('editName');
        var editBio = document.getElementById('editBio');
        var editAbout = document.getElementById('editAbout');

        userData.name = editName.value;
        userData.bio = editBio.value;
        userData.about = editAbout.value;
        document.getElementById('userName').textContent = userData.name;
        document.getElementById('userBio').textContent = userData.bio;
        document.getElementById('userAbout').textContent = userData.about;
        var editForm = document.getElementById('editProfileForm');
        editForm.style.display = 'none';
    });

    var savedPostsData = ["Saved Post 1", "Saved Post 2"];
    var friendsData = ["Friend 1", "Friend 2"];

    function updateSections(sectionId) {
        hideAllSections();
        if (sectionId === 'myPosts') {
            populateSection('myPosts', userData.posts);
        } else if (sectionId === 'savedPosts') {
            populateSection('savedPosts', savedPostsData);
        } else if (sectionId === 'friends') {
            populateSection('friends', friendsData);
        }
        document.getElementById(sectionId).style.display = 'block';
    }

    function populateSection(sectionId, data) {
        var section = document.getElementById(sectionId);
        section.innerHTML = '';
        if (sectionId === 'myPosts') {
            data.forEach(function(post) {
                var postElement = document.createElement('div');
                postElement.innerHTML = '<h3>' + post.title + '</h3><p>' + post.description + '</p>';
                section.appendChild(postElement);
            });
        } else {
            data.forEach(function(item) {
                var listItem = document.createElement('li');
                listItem.textContent = item;
                section.appendChild(listItem);
            });
        }
    }

    function hideAllSections() {
        var sections = document.querySelectorAll('.section-content');
        sections.forEach(function(section) {
            section.style.display = 'none';
        });
    }

    document.querySelectorAll('.section-buttons button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            updateSections(sectionId);
        });
    });

    updateSections('myPosts');
});
