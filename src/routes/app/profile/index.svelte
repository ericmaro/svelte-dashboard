<script lang="typescript">
  import { navigating } from '$app/stores';
import { getLoggedInUserAction, currentUser, updateUserPasswordAction } from "@/stores/user/userStore";
import MasterForm from "@/components/MasterForm/MasterForm.svelte";
import { updatePasswordForm } from "@/routes/app/users/forms/updatePassword";
import { onMount } from "svelte";
import type { UserUpdatePasswordInput } from "@/stores/user/types/userUpdatePasswordInput";
import { init } from 'svelte/internal';
let formData = {}

    let currentTab = "info"
  

    onMount(()=>{
        getLoggedInUserAction();
        const urlParams = new URLSearchParams(window.location.search);
        const hasTab = urlParams.has('tab')
        if(hasTab){
          const tab = urlParams.get('tab')
          currentTab = tab
        }
        
    })


    const changeTab = (tab:string)=>{
        currentTab = tab;
    }
    const onFormChange = (event) => {
		formData = event.detail;
	};

    const onSubmit = (event) => {
        const values: UserUpdatePasswordInput = event.detail
        updateUserPasswordAction({input:values, id:$currentUser?.user.id})
    }
</script>


<div class="tabs tabs-boxed z-1 mb-5">
	<button on:click={()=>changeTab('info')} class:tab-active={currentTab === 'info'} class="tab tab-lg">Personal Information</button>
	<button on:click={()=>changeTab('security')} class:tab-active={currentTab === 'security'} class="tab tab-lg">Password and Security</button>
</div>
<div class="w-full bg-skin-inverted  p-5">
{#if currentTab==="info"}
<div class="text-gray-600 capitalize">
   

    <div class="grid grid-cols-1 lg:grid-cols-2 text-sm 2xl:text-base mb-8">
      <!-- Grids -->
      <div class="flex py-4">
        <span class="text-gray-400 w-1/4">Names</span>

        <span>
          { $currentUser?.user?.firstName } { $currentUser?.user?.lastName }

        </span>
      </div>
      <div class="flex py-4">
        <span class="text-gray-400 w-1/4">Gender</span>

        <span> { $currentUser?.user?.gender } </span>
      </div>
      <div class="flex py-4">
        <span class="text-gray-400 w-1/4">Date of Birth</span>

        <span> { $currentUser?.user?.dateOfBirth } </span>
      </div>
      <div class="flex py-4">
        <span class="text-gray-400 w-1/4">Email</span>

        <span class="lowercase"> { $currentUser?.user?.email} </span>
      </div>
      <div class="flex py-4">
        <span class="text-gray-400 w-1/4">Phone</span>

        <span> { $currentUser?.user?.phone } </span>
      </div>
      <div class="flex py-4">
        <span class="text-gray-400 w-1/4">Address</span>

        <span> { $currentUser?.user?.address } </span>
      </div>
      <div class="flex py-4">
        <span class="text-gray-400 w-1/4">Region</span>

        <span> { $currentUser?.user?.region } </span>
      </div>
      <div class="flex py-4">
        <span class="text-gray-400 w-1/4">Country</span>

        <span> { $currentUser?.user?.country } </span>
      </div>
      <div class="flex py-4">
        <span class="text-gray-400 w-1/4">Joined</span>

        <span> { $currentUser?.user?.createdAt } </span>
      </div>
      <div class="flex py-4">
        <span class="text-gray-400 w-1/4">Updated</span>

        <span> { $currentUser?.user?.updatedAt } </span>
      </div>
      <!-- End Grids -->
    </div>

    <p class="py-4 text-lg border-b-2 border-gray-200">
      Account Information
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 text-sm 2xl:text-base mb-8">
      <!-- Grids -->
      <div class="flex py-4">
        <span class="text-gray-400 w-1/4">Role</span>

        <span> { $currentUser?.user?.role?.name } </span>
      </div>
      <div class="flex py-4">
        <span class="text-gray-400 w-1/4">Work ID</span>

        <span> { $currentUser?.user?.workID } </span>
      </div>
 
    </div>
  </div>
{:else}
<div class="w-96">
    <MasterForm
    on:change={onFormChange}
    loading={false}
    data={{}}
    on:submit={onSubmit}
    form={updatePasswordForm}
    />
</div>

{/if}
</div>
