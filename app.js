const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const clanResults = document.querySelector('#clan-results');
const playerResults = document.querySelector('#player-results');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    searchClans(query);
    searchPlayers(query);
});

async function searchClans(query) {
    try {
        const response = await fetch(`https://api.clashofclans.com/v1/clans?name=${encodeURIComponent(query)}`, {
            headers: {
                'Authorization': 'Bearer <eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRkMzk0MWQ2LTE0MTYtNDgyMi05NGYwLWY1N2JlZDBmZWFmYiIsImlhdCI6MTY3NzI2MDI5OSwic3ViIjoiZGV2ZWxvcGVyLzAwNjU2Yjk2LTc4OGUtZTJkMS0yNDM5LWM0MjhkNGU0ZGM0OSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwMy44Mi4xOTEuMTQ1Il0sInR5cGUiOiJjbGllbnQifV19.Q7EBfvG-N0VEUmbmuOc_30FDmfl6ignUZdrwCizP8rO7-gUM41SIAT4xlqD6qWExLV_vh3mUWDQetOH2-o5NFQ>'
            }
        });
        const data = await response.json();
        if (data.items.length > 0) {
            clanResults.innerHTML = '';
            data.items.forEach((clan) => {
                const result = document.createElement('div');
                result.classList.add('result');
                result.innerHTML = `
          <img src="${clan.badgeUrls.small}" alt="Clan badge">
          <div class="name">${clan.name}</div>
          <div class="level">Level ${clan.clanLevel}</div>
        `;
                result.addEventListener('click', () => {
                    window.location.href = `https://www.clashofclans.com/clans/search?name=${encodeURIComponent(clan.name)}`;
                });
                clanResults.appendChild(result);
            });
            clanResults.style.display = 'block';
        } else {
            clanResults.style.display = 'none';
        }
    } catch (error) {
        console.error(error);
    }
}

async function searchPlayers(query) {
    const response = await fetch(`https://api.clashofclans.com/v1/clans?name=${encodeURIComponent(query)}`, {
        headers: {
            'Authorization': 'Bearer <eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRkMzk0MWQ2LTE0MTYtNDgyMi05NGYwLWY1N2JlZDBmZWFmYiIsImlhdCI6MTY3NzI2MDI5OSwic3ViIjoiZGV2ZWxvcGVyLzAwNjU2Yjk2LTc4OGUtZTJkMS0yNDM5LWM0MjhkNGU0ZGM0OSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwMy44Mi4xOTEuMTQ1Il0sInR5cGUiOiJjbGllbnQifV19.Q7EBfvG-N0VEUmbmuOc_30FDmfl6ignUZdrwCizP8rO7-gUM41SIAT4xlqD6qWExLV_vh3mUWDQetOH2-o5NFQ>'
        }
    });
    const data = await response.json();
    if (data.items.length > 0) {
        playerResults.innerHTML = '';
        data.items.forEach((player) => {
            const result = document.createElement('div');
            result.classList.add('result');
            result.innerHTML = `
          <img src="${player.league.iconUrls.tiny}" alt="League icon">
          <div class="name">${player.name}</div>
          <div class="level">Town Hall ${player.townHallLevel}</div>
        `;
            result.addEventListener('click', () => {
                window.location.href = `https://www.clashofclans.com/player/profile/${encodeURIComponent(player.tag)}`;
            });
            playerResults.appendChild(result);
        });
        playerResults.style.display = 'block';
    } else {
        playerResults.style.display = 'none';
    }

}
const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.clashofclans.com/v1/clans?name=${encodeURIComponent(query)}`, {
    headers: {
        'Authorization': 'Bearer <eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRkMzk0MWQ2LTE0MTYtNDgyMi05NGYwLWY1N2JlZDBmZWFmYiIsImlhdCI6MTY3NzI2MDI5OSwic3ViIjoiZGV2ZWxvcGVyLzAwNjU2Yjk2LTc4OGUtZTJkMS0yNDM5LWM0MjhkNGU0ZGM0OSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwMy44Mi4xOTEuMTQ1Il0sInR5cGUiOiJjbGllbnQifV19.Q7EBfvG-N0VEUmbmuOc_30FDmfl6ignUZdrwCizP8rO7-gUM41SIAT4xlqD6qWExLV_vh3mUWDQetOH2-o5NFQ>'
    }
});
