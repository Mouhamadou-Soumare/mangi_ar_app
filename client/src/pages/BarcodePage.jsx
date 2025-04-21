import React from 'react'
import { BarCodeScanner } from '../components'

function BarcodePage() {
  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Scanner un produit
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Utilisez votre caméra pour scanner le code-barres d’un produit alimentaire et obtenir instantanément ses informations nutritionnelles, sa composition et ses origines.
        </p>
      </div>

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-6">
        <BarCodeScanner />
      </div>
    </div>
  )
}

export default BarcodePage
