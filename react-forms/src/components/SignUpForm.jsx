const SignUpForm = () => {
    return (
        <form
            id='sign-up-form'
            className='flex flex-col gap-4 border-2 rounded p-6 w-1/2 my-4'
        >
            <h2 className='text-4xl m-4'>Sign Up</h2>
            <label htmlFor='first-name'>First Name</label>
            <input
                id='first-name'
                name='first-name'
                className='input input-bordered'
                type='text'
                required
            />
            <label htmlFor='last-name'>Last Name</label>
            <input
                id='last-name'
                name='last-name'
                className='input input-bordered'
                type='text'
                required
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                name='email'
                className='input input-bordered'
                type='email'
                required
            />
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                name='password'
                className='input input-bordered'
                type='password'
                required
            />
            <label htmlFor='profile-pic'>Profile Picture</label>
            <input
                id='profile-pic'
                name='profile-pic'
                className='input input-bordered'
                type='url'
                required
            />
            <fieldset className='flex flex-col gap-4 border p-3'>
                <legend>Choose Account Type</legend>
                <div>
                    <input
                        type='radio'
                        name='account-type'
                        id='student'
                        value='Student'
                        required
                    />
                    <label htmlFor='student'>Student</label>
                </div>
                <div>
                    <input
                        type='radio'
                        name='account-type'
                        id='alumni'
                        value='Alumni'
                    />
                    <label htmlFor='alumni'>Alumni</label>
                </div>
            </fieldset>
            <button className='btn' type='submit'>
                Sign Up
            </button>
        </form>
    );
};
export default SignUpForm;
