export function Widget(){
  return(
    <div className="w-[448px] rounded overflow-hidden">
      {/* Header */}
      <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-semibold">Notificações</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">MARCAR TODAS COMO VISTAS</button>
      </div>

       {/* Recent Section */}

      <div>
        <div className="bg-zinc-900 px-5 py-2 text-sm text-zinc-400">Recentes</div>
      </div>
      
    </div>
    
  )
}