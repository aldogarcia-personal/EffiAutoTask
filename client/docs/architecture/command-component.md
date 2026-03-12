# Command Palette Component

Archivo:

src/components/command/CommandPalette.tsx

Ejemplo conceptual:

export function CommandPalette() {

const [query, setQuery] = useState("")

const filteredCommands = commands.filter(cmd =>
cmd.title.toLowerCase().includes(query.toLowerCase())
)

return (

    <div className="command-palette">

      <input
        placeholder="Search commands..."
        onChange={(e) => setQuery(e.target.value)}
      />

      {filteredCommands.map(command => (

        <button
          key={command.id}
          onClick={command.action}
        >
          {command.title}
        </button>

      ))}

    </div>

)

}
