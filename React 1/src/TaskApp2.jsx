import './App.css'

function TaskApp2() {
    const name = "Hello World";
    const obj = { name: "Hello World Object" }
    const data = ['We', 'are', 'United'] //Show these in seperate tags
    const list = [
        { name: "Hello World 1" },
        { name: "Hello World 2" },
        { name: "Hello World 3" }
    ] //Show these in seperate tags

    const complex = [
        { company: 'XYZ', jobs: ['Javascript', 'React'] },
        { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }
    ] //Show these in a Table

    return (
        <>
            <h1>Task 1  </h1>
            <h3>Variable Value---{name}</h3>
            <br />
            <h3>Object Value---{obj.name}</h3>
            <br />
            <h3>Array Value---
                <ol>
                    {data.map((items) => {
                        return <li>{items}</li> //return only array values
                    })}
                </ol>
            </h3>
            <br />
            <h3>Array of Object Value---
                <ol>
                    {list.map((items) => {
                        return <li>{items.name}</li> //return object value that are in array
                    })}
                </ol>
            </h3>
            <br />
            <h3>Array of Complex Object Value---
                <table border="10">
                    <tr>
                        <th>Company</th>
                        <th>jobs</th>
                    </tr>

                    {complex.map((items) => {
                        return <tr>
                            <td>{items.company}</td>

                            <td>{items.jobs.map((jobItems) => {
                                return <li>{jobItems}</li>
                            })}</td>
                        </tr>
                    })}
                </table>
            </h3>
        </>
    )
}
export default TaskApp2
