import Counter from "../../components/counter/Counter";
import MyButton from "../../components/myButton/MyButton";

function Lesson07() {
    let hero:string = 'batman'

    console.log(hero);
    
    interface ISuperhero{
        id:number
        name:string
        nickname:string
        abilities?:string[],
        age?:number | string
    }
    // наследование обьекта типов в ts
    interface ISpaceHerous extends ISuperhero{
        homeplanet?:'Crypton'|'Earth'
    }


    let hero1:ISpaceHerous = {
        id:1,
        name: 'Clark Kent',
        nickname: 'Superman',
        abilities:['super vision','can fly'],
        homeplanet:'Crypton'
    }
    let hero2:ISuperhero = {
        id:2,
        name: 'Bruce Wane',
        nickname: 'Batman',
        // этот ключ можно было не указывать
        abilities:[]
    }

    const heroes:ISuperhero[] = [hero1, hero2]
    
    // интерфейсы обьединяються
    //если напишите интерфейс с уже существуещим именем

    interface ISpaceHerous {
        isAlive?: boolean
    }

    type Animal = {
        name:string,
        weight:number
    };

    type ExoticAnimal = Animal & {
        isExotic: boolean,
        contry?: string
    }

    let panda:ExoticAnimal = {
        isExotic: true,
        name: 'Po',
        weight: 100,
        contry: 'China'
    };
    
    console.log(panda);
    
    console.log(heroes);
    // generics
    //способ ограничения данных на вход в функцию
    //фукция будет ждать в угловых скобках что вы явно укажите с каким типом

    function makeArray<T>(first:T, second:T): T[] {
        return [first, second]
    }

    const pepple = makeArray<number>(100,7.7)

    console.log(pepple);

    const handleHello = () => {
        console.log('hello!');
        
    }
    

    

    return (
    <div className="lesson-container">
            <h4>Lesson 07</h4>
            <p>Урок TypeScript часть 2 в комментариях к коду урока 🐢</p>
            <div>
            {heroes.map(hero => (
                <div key={hero.id}>
                <h4>🦹‍♂️: {hero.nickname}</h4>
                <p>Real name: {hero.name}</p>
                </div>
            ))}
            </div>
            <div>
                <MyButton />
                <MyButton  name='click' onClick={() => console.log('click')}/>
                <MyButton  name='hello' onClick={handleHello}/>
            
        </div>
        {/* вызов компонента counter */}
        <Counter />
        </div>
    );
}


export default Lesson07;