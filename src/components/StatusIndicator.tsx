interface StatusIndicatorProps {
  isLoggedIn: boolean
}

export function StatusIndicator({ isLoggedIn }: StatusIndicatorProps) {
  return (
    <div className="flex items-center">
      <span
        className={`mr-2 inline-block h-3 w-3 rounded-full ${
          isLoggedIn ? 'bg-green-500' : 'bg-gray-400'
        }`}
        title={isLoggedIn ? 'Logged in' : 'Not logged in'}
      />
      <span className="font-medium text-sm text-white">
        {isLoggedIn ? 'Logged in' : 'Not logged in'}
      </span>
    </div>
  )
}
