import { UseAuth } from './AuthContext'

export function AuthDashboardPage() {
  const { userInfo } = UseAuth()

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
              <div className="rounded-md bg-gray-50 p-4">
                <h2 className="mb-2 font-semibold text-gray-700 text-lg">
                  Token Information
                </h2>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-700">Access Token:</p>
                      <button
                        type="button"
                        onClick={() =>
                          navigator.clipboard.writeText(
                            (userInfo as { accessToken: string | null })
                              ?.accessToken || '',
                          )
                        }
                        className="rounded bg-blue-500 px-2 py-1 text-white text-xs hover:bg-blue-600"
                      >
                        Copy
                      </button>
                    </div>
                    <p className="break-all text-gray-600 text-sm">
                      {(userInfo as { accessToken: string | null })
                        ?.accessToken || 'No access token'}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-700">
                        Refresh Token:
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          navigator.clipboard.writeText(
                            (userInfo as { refreshToken: string | null })
                              ?.refreshToken || '',
                          )
                        }
                        className="rounded bg-blue-500 px-2 py-1 text-white text-xs hover:bg-blue-600"
                      >
                        Copy
                      </button>
                    </div>
                    <p className="break-all text-gray-600 text-sm">
                      {(userInfo as { refreshToken: string | null })
                        ?.refreshToken || 'No refresh token'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
