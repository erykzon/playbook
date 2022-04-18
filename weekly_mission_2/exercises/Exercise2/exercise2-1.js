const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

explorers.forEach((n) => console.log(n.name + ' stack ► ' + n.stack))

const listStacks =explorers.map((list) => list.stack)
console.log('Nueva lista de stacks : ' + listStacks)

const stacksJS = explorers.filter((sta) => sta.stack.includes('js'))
console.log(stacksJS)

const city = explorers.find((c) => c = 'CDMX')
console.log(city)

const exercises_R = explorers.exercises_completed.reduce((acc, elemet) => acc + elemet , 0)
console.log('La suma de los ejercicios resueltos es: ' + exercises_R)