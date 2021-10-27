<script lang="typescript">
  import { loginCheckAction} from '@/stores/user/userStore';
import { onMount } from 'svelte';
  onMount(()=>{
      loginCheckAction()
  })

</script>
