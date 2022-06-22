import React, {useContext} from 'react'
import { GlobalContext } from './global_context'

export default function useAuth() {
  return useContext(GlobalContext);
}
