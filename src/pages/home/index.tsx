import { Dialog } from '../../components/ui/dialog'

import { CreateGoal } from '../../components/create-goal'
import { EmptyGoals } from '../../components/empty-goals'
import { Summary } from '../../components/summary'
import { useEffect, useState } from 'react'

type SummaryResponse={
  completed: number
  total: number
  goalsPerDay: Record<string, {
      id: string;
      title: string;
      completedAt: string;
  }[]>;
}
export function Home() {
  const [count, setCount] = useState(5)
  const [summary, setSummary] = useState<SummaryResponse | null>(null)

  function increment() {
    setCount(count + 1)
  }

  useEffect(() => {
    fetch('http://localhost:3333/summary')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSummary(data.summary)
      })
  }, [])

  return (
    <Dialog>
      
      {summary?.total && summary.total > 0 ? <Summary/> : <EmptyGoals />}

      <button type="button" onClick={increment}>
        Incrementar
      </button>
      <h1 className="text-4xl">{count}</h1>
      <pre>{JSON.stringify(summary, null, 2)}</pre>
      {/*<EmptyGoals />*/}
      {/*  <Summary />*/}
      <CreateGoal />
    </Dialog>
  )
}
