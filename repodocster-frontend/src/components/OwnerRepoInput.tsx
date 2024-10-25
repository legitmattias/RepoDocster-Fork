import React from 'react'
import './OwnerRepoInput.css'

interface OwnerRepoInputProps {
  owner: string
  repo: string
  onOwnerChange: (value: string) => void
  onRepoChange: (value: string) => void
}

const OwnerRepoInput: React.FC<OwnerRepoInputProps> = ({ owner, repo, onOwnerChange, onRepoChange }) => (
  <div className="owner-repo-input">
    <div>
      <label htmlFor="owner">Owner:</label>
      <input
        id="owner"
        type="text"
        value={owner}
        onChange={(e) => onOwnerChange(e.target.value)}
        placeholder="GitHub owner"
        required
      />
    </div>
    <div>
      <label htmlFor="repo">Repository:</label>
      <input
        id="repo"
        type="text"
        value={repo}
        onChange={(e) => onRepoChange(e.target.value)}
        placeholder="GitHub repository"
        required
      />
    </div>
  </div>
)

export default OwnerRepoInput