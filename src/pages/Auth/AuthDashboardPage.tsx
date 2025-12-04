import { UseAuth } from './AuthContext'

export function AuthDashboardPage() {
  const { userInfo, logout } = UseAuth()

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h1 className="mb-6 font-bold text-2xl text-gray-800">
            Authentication Dashboard
          </h1>

          <div className="space-y-4">
            <div className="rounded-md bg-gray-50 p-4">
              <h2 className="mb-2 font-semibold text-gray-700 text-lg">
                Authentication Status
              </h2>
              <p className="text-gray-600">
                Status:{' '}
                <span
                  className={`font-medium ${userInfo ? 'text-green-600' : 'text-red-600'}`}
                >
                  {userInfo ? 'Authenticated' : 'Not Authenticated'}
                </span>
              </p>
            </div>

            {userInfo && (
              <>
                <div className="rounded-md bg-gray-50 p-4">
                  <h2 className="mb-2 font-semibold text-gray-700 text-lg">
                    User Information
                  </h2>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium text-gray-700">ID:</p>
                      <p className="break-all text-gray-600 text-sm">
                        {userInfo.user.id}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Email:</p>
                      <p className="break-all text-gray-600 text-sm">
                        {userInfo.user.email}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Name:</p>
                      <p className="break-all text-gray-600 text-sm">
                        {userInfo.user.name}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">
                        Email Verified:
                      </p>
                      <p className="break-all text-gray-600 text-sm">
                        {userInfo.user.emailVerified ? 'Yes' : 'No'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-md bg-gray-50 p-4">
                  <h2 className="mb-2 font-semibold text-gray-700 text-lg">
                    Session Information
                  </h2>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium text-gray-700">Session ID:</p>
                      <p className="break-all text-gray-600 text-sm">
                        {userInfo.session.id}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Expires At:</p>
                      <p className="break-all text-gray-600 text-sm">
                        {userInfo.session.expiresAt.toISOString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={logout}
                    className="rounded-lg bg-red-500 px-6 py-2 text-white transition hover:bg-red-600"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
