function handlePet (petName = 'pet', petFeed = 'feed-pet') {
    document.addEventListener("DOMContentLoaded", () => {
        const petUI = document.querySelector(`div[id=${petName}]`);
        const petCare = document.querySelector(`button[id=${petFeed}]`);
        setInterval(updatePet, 2000);
        
        function initPet () {
            let pet;
            pet = {
                hunger: 50,
                thirst: 50,
                hygiene: 100,
                energy: 100,
                happiness: 100,
                health: 100,
            }
            return pet;
        }

        let pet = initPet();

        function renderPet() {
            let para = '';
            for (let i = 0; i < Object.keys(pet).length; i++) {
                para += '<p>' + Object.keys(pet)[i] + ' ' + Object.values(pet)[i] + '<p>';
            };
            console.log(para)
            return para;
        }

        function updatePet() {
            if (pet.health > 0) {
                pet.hunger -= 10;
                pet.thirst -= 10;
                pet.hygiene -= 10;
                pet.energy -= 10;
                if (pet.hunger < 50 || pet.thirst < 50 || pet.hygiene < 50) {
                    pet.happiness -= 10;
                } else if (pet.happiness < 100) {
                    pet.happiness += 10;
                }
                if (pet.hunger < 10 || pet.thirst < 10 || pet.hygiene < 10) {
                    pet.health -= 10;
                } else if (pet.health < 100) {
                    pet.health += 10;
                }
                document.querySelector(`div[id=${petName}]`).innerHTML = renderPet();
            } else {
                petUI.innerHTML = 'dead'
            }

        }

        function carePet() {
            pet.hunger = 100;
            pet.thirst = 100;
            pet.hygiene = 100;
            pet.energy = 100;
            if (pet.health <= 0) {
                pet = initPet();
            }
            petUI.innerHTML = renderPet();
        }

        // handle button click
        petCare.addEventListener('click', () => {
            carePet();
            console.log('click')
        })

    });
}