import React from 'react';
import { Motion } from '../data/mockData';

interface VotingGraphProps {
  motion: Motion;
}

export default function VotingGraph({ motion }: VotingGraphProps) {
  const totalSeats = motion.totalVotes;
  const forSeats = motion.votesFor;
  const againstSeats = motion.votesAgainst;
  const abstainSeats = motion.abstentions;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* Motion Details */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">{motion.topic}</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Type: <span className="font-semibold">{motion.type}</span></p>
              <p className="text-gray-600">Introduced by: <span className="font-semibold">{motion.introducedBy}</span></p>
            </div>
            <div>
              <p className="text-gray-600">Date: <span className="font-semibold">{motion.date}</span></p>
              <p className="text-gray-600">Status: <span className={`font-semibold ${motion.status === 'passed' ? 'text-green-600' : 'text-red-600'}`}>
                {motion.status.charAt(0).toUpperCase() + motion.status.slice(1)}
              </span></p>
            </div>
          </div>
        </div>

        {/* Parliament Style Seating */}
        <div className="relative w-full h-64 bg-gray-100 rounded-full overflow-hidden mb-8">
          <div className="absolute inset-0 flex">
            {/* For Votes */}
            <div 
              className="bg-green-500 h-full"
              style={{ width: `${(forSeats / totalSeats) * 100}%` }}
            >
              <div className="h-full flex items-center justify-center text-white font-bold">
                {forSeats}
              </div>
            </div>
            {/* Against Votes */}
            <div 
              className="bg-red-500 h-full"
              style={{ width: `${(againstSeats / totalSeats) * 100}%` }}
            >
              <div className="h-full flex items-center justify-center text-white font-bold">
                {againstSeats}
              </div>
            </div>
            {/* Abstentions */}
            <div 
              className="bg-gray-400 h-full"
              style={{ width: `${(abstainSeats / totalSeats) * 100}%` }}
            >
              <div className="h-full flex items-center justify-center text-white font-bold">
                {abstainSeats}
              </div>
            </div>
          </div>
        </div>

        {/* Vote Count Bar */}
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <div className="text-center">
            <div className="text-green-600 font-bold">{forSeats}</div>
            <div className="text-sm text-gray-600">For</div>
          </div>
          <div className="text-center">
            <div className="text-red-600 font-bold">{againstSeats}</div>
            <div className="text-sm text-gray-600">Against</div>
          </div>
          <div className="text-center">
            <div className="text-gray-600 font-bold">{abstainSeats}</div>
            <div className="text-sm text-gray-600">Abstain</div>
          </div>
          <div className="text-center">
            <div className="text-blue-600 font-bold">{totalSeats}</div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
        </div>
      </div>
    </div>
  );
}