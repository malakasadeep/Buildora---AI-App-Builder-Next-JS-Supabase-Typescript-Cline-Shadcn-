import React from 'react'

const WorkspaceClint = () => {
    return (
        <div className='flex h-[calc(100vh-4rem)] overflow-hidden bg-[#0a0a0a]'>
           {/* Chat panel */}
           <div className='w-[320px] shrink-0 border-r border-white/6 bg-[#0d0d0d] flex items-center justify-center'>
                <p className='text-xs text-white/50'>Chat panel</p>
           </div>
           {/* Code panel */}
           <div className='flex-1 flex flex-col overflow-hidden items-center justify-center'>
                <p className='text-xs text-white/50'>Code panel</p>
           </div>
        </div>
    )
}

export default WorkspaceClint