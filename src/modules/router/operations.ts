import { Operation } from 'overmind'
import page from 'page'

export const redirect = (url: string) => {
  const redirect: Operation.Do = () => page.show(url)
  return redirect
}
