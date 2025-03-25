<script>
    import { Person } from "svelte-radix";

</script>
<div class="dropdown dropdown-end">
	<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
		<Person class="h-5 w-5" />
	</div>
	<ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
		<li><a>Profile</a></li>
		<li><a>Settings</a></li>
		<li><a>Logout</a></li>
	</ul>
</div>